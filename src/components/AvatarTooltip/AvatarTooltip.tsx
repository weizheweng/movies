import { Avatar, Tooltip, useOutsideClick } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { CAST_IMAGE_BASE_URL } from '../../constants/baseUrl'

interface AvatarTooltipProps {
  originalName: string,
  profilePath: string | null,
}

export function AvatarTooltip ({ originalName, profilePath }: AvatarTooltipProps) {
  const [isOpen, setIsOpen] = useState(false)
  const tooltipRef = useRef<HTMLDivElement>(null)
  useOutsideClick({
    ref: tooltipRef,
    handler: () => setIsOpen(false),
  })
  return (
    <Tooltip ref={tooltipRef} key={originalName} label={originalName} placement="top-start" isOpen={isOpen}>
      <Avatar name={originalName} src={`${CAST_IMAGE_BASE_URL}${profilePath}`} size="xl" onClick={() => setIsOpen(!isOpen)} />
    </Tooltip>
  )
}
