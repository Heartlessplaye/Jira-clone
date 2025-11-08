

interface ButtonProps {
  onClick: () => void
}
export const Button = (props: ButtonProps) => {
 
  return (
    <button onClick={props.onClick} data-testid="button-test">Button</button>
  )
}

