'use client'

import { ReactNode } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import useWindowSize from '@/Hooks/useWindowSize'

export default function Tooltiper({
  children,
  content,
  padding,
  ...props
}: {
  children: ReactNode
  content: string
  padding?: number
}) {
  const windowSize = useWindowSize()
  return (
    <>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
          <Tooltip.Portal>
            {windowSize.width && windowSize.width >= 640 ? (
              <Tooltip.Content
                className="select-none rounded-[4px] bg-purple-50 px-[15px] py-[10px] text-[15px] leading-none text-purple-900 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade"
                sideOffset={12}
                collisionPadding={
                  windowSize.width && windowSize.width <= 1080 ? padding : 0
                }
                {...props}
              >
                {content}
                <Tooltip.Arrow className="fill-purple-50" />
              </Tooltip.Content>
            ) : null}
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  )
}
