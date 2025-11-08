

interface ButtonProps {
  onClick: () => void
}
export const Button = (props: ButtonProps) => {


  const handler = () => {
    console.log("Button click handler");
  }
  if (!props.onClick) {
    return <button onClick={props.onClick} data-testid="button-test"> button </button>
  }
  return (
    <button onClick={props.onClick} data-testid="button-test">Button</button>
  )
}

