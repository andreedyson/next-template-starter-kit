import {
  CircleCheck,
  CircleX,
  Info,
  LucideIcon,
  TriangleAlert,
} from "lucide-react";
import { toast } from "react-hot-toast";

type ToastType = "success" | "error" | "info" | "warning" | "";

const toastConfig: Record<
  Exclude<ToastType, "">,
  { bg: string; icon: LucideIcon; descColor?: string }
> = {
  success: {
    bg: "bg-[#22c55e]",
    icon: CircleCheck,
    descColor: "text-slate-200",
  },
  error: {
    bg: "bg-[#ef4444]",
    icon: CircleX,
    descColor: "text-slate-200",
  },
  info: {
    bg: "bg-[#3b82f6]",
    icon: Info,
    descColor: "text-slate-200",
  },
  warning: {
    bg: "bg-[#f59e0b]",
    icon: TriangleAlert,
    descColor: "text-slate-900",
  },
};

export const customToast = (
  type: ToastType,
  title: string,
  description?: string,
) => {
  const id = `toast-${type}`;
  const cfg = type ? toastConfig[type] : null;
  const Icon = cfg?.icon;

  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "custom-animate-enter" : "custom-animate-leave"
        } ring-opacity-5 w-fit rounded-lg p-4 text-white shadow-lg ${
          cfg ? cfg.bg : "bg-white"
        }`}
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="size-5 text-white" strokeWidth={2.2} />}
          <div>
            <p className="text-sm font-semibold">{title}</p>
            {description && (
              <p className={`text-sm ${cfg?.descColor ?? "text-slate-600"}`}>
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    ),
    { id },
  );
};
