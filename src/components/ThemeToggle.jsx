import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLocale();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.theme.toLight : t.theme.toDark}
      className="grid h-10 w-10 place-items-center rounded-xl border border-line/15 text-ink-muted transition-colors hover:text-ink"
    >
      {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}
