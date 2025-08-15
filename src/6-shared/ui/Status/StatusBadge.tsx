import successIcon from '../../assets/badge/success.svg'
import progressIcon from '../../assets/badge/progress.svg'
import errorIcon from '../../assets/badge/failed.svg'
import waitIcon from '../../assets/badge/wait.svg'
import holdIcon from '../../assets/badge/hold.svg'
import { cn } from '../../utils/cn'

type StatusType = 'success' | 'progress' | 'error' | 'wait' | 'hold'

interface StatusBadgeProps {
  status: StatusType
}

const statusIcons = {
  success: {
    icon: successIcon,
    color: 'bg-[#ECFDF5] text-[#059669]'
  },
  progress: {
    icon: progressIcon,
    color: 'bg-[#FEF3C7] text-[#D97706]'
  },
  error: {
    icon: errorIcon,
    color: 'bg-[#FEE2E2] text-[#DC2626]'
  },
  wait: {
    icon: waitIcon,
    color: 'bg-[#EEF2FF] text-[#6366F1]'
  },
  hold: {
    icon: holdIcon,
    color: 'bg-[#F3F4F6] text-[#6B7280]'
  }
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 px-2 py-1 rounded-lg',
        statusIcons[status].color
      )}>
      <img
        src={statusIcons[status].icon}
        alt={status}
      />
      <span className="text-xs font-medium">{status}</span>
    </div>
  )
}
