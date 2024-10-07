import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { GameRecordType } from "@/redux/slices/gameSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type PlayerRecordItemProps = {
  levelRecord: GameRecordType[];
};

const tableTypeList: ("accurate" | "recent")[] = ["accurate", "recent"];

export const PlayerRecordItem = memo(
  ({ levelRecord }: PlayerRecordItemProps) => {
    const { t } = useTranslation();

    const renderRecord = useMemo(() => {
      let list = [...levelRecord];

      // 絕對值由小到大排序
      list = list.sort((a, b) => Math.abs(+a.score) - Math.abs(+b.score));
      // 若有一樣的最小成績則都顯示
      list = list.filter(
        (e) => Math.abs(+e.score) === Math.abs(+list[0].score)
      );

      return {
        accurate: list.slice(0, 3),
        recent: levelRecord.slice(0, 3),
      };
    }, [levelRecord]);

    return (
      <>
        <section className="space-y-5 w-full md:flex-1">
          {tableTypeList.map((tableType) => (
            <div key={tableType}>
              <h6 className="text-secondary text-center md:text-left">
                {t(`component_resultDialog_table_${tableType}`)}
              </h6>
              <Table className="text-center whitespace-nowrap">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">
                      {t("component_resultDialog_table_recipe")}
                    </TableHead>
                    <TableHead className="w-1/3">
                      {t("component_resultDialog_table_time")}
                    </TableHead>
                    <TableHead className="w-1/3">
                      {t("component_resultDialog_table_score")}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {renderRecord[tableType].map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {t(item.recipeName)}
                      </TableCell>
                      <TableCell>{item.targetTime}</TableCell>
                      <TableCell>{item.score}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ))}
        </section>
      </>
    );
  }
);
