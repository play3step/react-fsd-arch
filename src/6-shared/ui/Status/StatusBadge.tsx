import successIcon from '../../assets/badge/success.svg'
import progressIcon from '../../assets/badge/progress.svg'
import errorIcon from '../../assets/badge/error.svg'
import reviewIcon from '../../assets/badge/review.svg'

type StatusType = 'success' | 'progress' | 'error' | 'review'

interface StatusBadgeProps {
  status: StatusType
}

const statusIcons = {
  success: {
    icon: successIcon,
    color: 'bg-success-100 text-success-500'
  },
  progress: {
    icon: progressIcon,
    color: 'bg-warning-100 text-warning-600'
  },
  error: {
    icon: errorIcon,
    color: 'bg-error-100 text-error-500'
  },
  review: {
    icon: reviewIcon,
    color: 'bg-primary-100 text-primary-500'
  }
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <div
      className={`inline-flex items-center gap-xs px-sm py-xs rounded-lg ${statusIcons[status].color}`}>
      <img
        src={statusIcons[status].icon}
        alt={status}
      />
      <span className="text-xs font-medium">{status}</span>
    </div>
  )
}
