import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

type selectItem = {
  name: string;
  value: string;
};

type SelectorProps = {
  list: selectItem[] | string[];
  keyField?: "value";
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange?: (value: string) => void;
  icon?: string;
  triggerClassName?: string;
  contentClassName?: string;
  placeholder?: string;
  disabled?: boolean;
};

export const Selector = ({
  list,
  keyField = "value",
  value,
  setValue,
  onChange,
  icon,
  triggerClassName,
  contentClassName,
  placeholder,
  disabled = false,
}: SelectorProps) => {
  const { t } = useTranslation();

  return (
    <Select
      defaultValue={value}
      onValueChange={(e: string) => {
        setValue(e);
        onChange?.(e);
      }}
      disabled={disabled}
    >
      <SelectTrigger
        className={cn(
          "justify-between focus:!shadow-none focus:!outline-offset-0",
          triggerClassName
        )}
      >
        <div className="flex items-center">
          {icon && <img src={icon} className="w-6 h-6 mr-2" />}
          <SelectValue
            placeholder={placeholder || t("component_select_placeholder")}
            aria-label={value}
          />
        </div>
      </SelectTrigger>
      <SelectContent className={cn("p-1", contentClassName)}>
        {list.map((item) => (
          <SelectItem
            className="py-2"
            value={
              keyField && typeof item === "object"
                ? item[keyField]
                : (item as string)
            }
            key={
              keyField && typeof item === "object"
                ? item[keyField]
                : (item as string)
            }
          >
            {typeof item === "object" ? item["name"] : item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
