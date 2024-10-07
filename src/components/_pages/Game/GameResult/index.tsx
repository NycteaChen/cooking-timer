import { memo, useState, useEffect, useContext, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { GameContext } from "@/contexts/game.context";
import { useAppDispatch } from "@/redux/hooks";
import { setUserRecord } from "@/redux/slices/gameSlice";
import { RecipeContext } from "@/contexts/recipe.context";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { recipeItem } from "@/utils/levelRecipes";
import type { levelItem } from "@/utils/levelList";
import loadingImg from "@/assets/image/loading.png";

export const GameResult = memo(({ record }: { record: string }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  // https://github.com/shadcn-ui/ui/issues/386
  const [openDialog, setOpenDialog] = useState(false);
  const [showMask, setShowMask] = useState(true);

  const hasDispatchData = useRef(false);

  const { recipe } = useContext(RecipeContext) as {
    recipe: recipeItem;
  };

  const { levelData, name } = useContext(GameContext) as {
    levelData: levelItem;
    name: string;
  };

  const onOpenChange = (open: boolean) => {
    setOpenDialog(open);
    if (!open) {
      navigate("/");
    }
  };

  const score = useMemo(
    () => (+record - recipe.time).toFixed(1),
    [record, recipe]
  );

  const renderResultText = useMemo(() => {
    if (+score === 0) return t("component_gameResult_perfect");
    if (Math.abs(+score) < 1.5) return t("component_gameResult_good");
    if (Math.abs(+score) < 5) return t("component_gameResult_normal");
    if (Math.abs(+score) < 10) return t("component_gameResult_bad");
    return t("component_gameResult_confusion");
  }, [score, t]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOpenDialog(true);
      setShowMask(false);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!hasDispatchData.current) {
      dispatch(
        setUserRecord({
          level: levelData.level,
          recipeName: recipe.name,
          record,
          score,
          targetTime: recipe.time,
          userName: name,
        })
      );
      hasDispatchData.current = true;
    }
  }, [dispatch, levelData, recipe, record, score, name]);

  return (
    <>
      {showMask && (
        <div className="bg-white/90 fixed top-0 left-0 w-full min-h-[100vh] z-[2] flex items-center justify-center animate-fade-in-300">
          <img className="animate-shake-1200" src={loadingImg} alt="cooking" />
        </div>
      )}
      <Dialog open={openDialog} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t("component_gameResult_title")}</DialogTitle>
            <DialogDescription aria-describedby={undefined} />
          </DialogHeader>
          <div className="flex flex-col space-y-4 text-center">
            <p className="text-black font-bold text-lg">
              <Trans i18nKey="component_gameResult_yours" values={{ name }} />
            </p>
            <h3 className="text-3xl text-[#e9b407] font-bold">{score}</h3>
            <p className="text-sm">{renderResultText}</p>
          </div>
          <DialogFooter>
            <Button
              className="mx-auto min-w-[120px] mt-2"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              {t("component_button_close")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
});
