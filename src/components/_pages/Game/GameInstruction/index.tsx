import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

export const GameInstruction = memo(() => {
  const { t } = useTranslation();

  return (
    <div>
      <h6>{t("component_gameInstruction_title")}</h6>
      <ol className="list-decimal space-y-3 mt-3 pl-4 text-sm">
        {[...Array(5)].map((_, index) => (
          <li key={index}>
            <Trans
              i18nKey={t(`component_gameInstruction_desc${index + 1}`)}
              components={{
                strong: <strong />,
                kbd: (
                  <kbd className="inline-flex items-center justify-center rounded-[8px] border border-solid border-b-2 border-[rgba(31,41,55,0.2)] px-1 text-sm leading-5 min-h-6 min-w-6 bg-[#f2f2f2] " />
                ),
              }}
            />
          </li>
        ))}
      </ol>
    </div>
  );
});
