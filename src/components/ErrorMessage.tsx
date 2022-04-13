interface ErrorMessageProps{
  errorMessage: string;
}

const ErrorMessage : React.FC<ErrorMessageProps> = ({errorMessage}) => {
  return (
    <div>
    <h6 style={{color:"red"}}>{errorMessage}</h6>    
    </div>
  )
}

export default ErrorMessage