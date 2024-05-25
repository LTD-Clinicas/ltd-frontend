import * as React from "react"

import { cn } from "@/lib/utils"
import {Label} from "@/components/ui/label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

const InputComLabel = ({
                            label,
                            placeholder,
                            register,
                            classNameLabel = "",
                            required = false,
                            classNameInput,
                            type
                       }: {
                            label:string
                            placeholder?:string
                            register:any
                            classNameLabel?:string
                            required?:boolean
                            classNameInput?:string
                            type?:string
                        }) => {
    
    const isRequired = required ? ` after:content-["*"] after:text-red-500 after:font-bold` : ""
    
    return (
        <div>
            <Label
                className={classNameLabel + isRequired}
            >
                {label}
            </Label>

            <Input
                className={classNameInput}
                placeholder={placeholder}
                type={type}
                {...register}
            />
        </div>
    )
}

export { Input, InputComLabel }
