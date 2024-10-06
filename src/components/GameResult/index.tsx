import { memo, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RecipeContext } from "@/components/GamingCard";
import { GameContext } from "@/pages/Game";
import type { recipeItem } from "@/utils/levelRecipes";
import type { levelItem } from "@/utils/levelList";

export const GameResult = memo(({ record }: { record: string }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // https://github.com/shadcn-ui/ui/issues/386
  const [openDialog, setOpenDialog] = useState(false);

  const { recipe } = useContext(RecipeContext) as {
    recipe: recipeItem;
  };

  const { levelData, name } = useContext(GameContext) as {
    levelData: levelItem;
    name: string;
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOpenDialog(true);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  const onOpenChange = (open: boolean) => {
    setOpenDialog(open);
    if (!open) {
      navigate("/");
    }
  };

  return (
    <>
      <div>
        結果: {name}: {record} 秒
      </div>
      <div>{JSON.stringify(recipe)}</div>
      <div>{JSON.stringify(levelData)}</div>
      <Dialog open={openDialog} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>結果標題</DialogTitle>
            <DialogDescription>
              結果結果結果結果結果結果結果結果結果結果
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button className="mx-auto min-w-[120px]" variant="outline">
              {t("component_button_close")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
});
