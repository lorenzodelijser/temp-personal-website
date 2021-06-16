import * as React from 'react'

function Figma({
    color = 'currentColor',
    size = 24
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill={color}
                d="M15.332,8.668c1.84,0,3.332-1.493,3.332-3.331c0-1.839-1.492-3.332-3.332-3.332H12H8.668c-1.84,0-3.332,1.493-3.332,3.332 c0,1.838,1.492,3.331,3.332,3.331c-1.84,0-3.332,1.493-3.332,3.333c0,1.839,1.492,3.332,3.332,3.332 c-1.84,0-3.332,1.493-3.332,3.332c0,1.84,1.492,3.332,3.332,3.332S12,20.503,12,18.664v-3.332V12V8.668H15.332z"
            />
            <circle
                fill={color}
                cx="15.332"
                cy="12"
                r="3.332"
            />


        </svg>
    )
}

export default React.memo(Figma)
