import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { AlertTriangle } from 'lucide-react'


interface AlertProps {
    title:string;
    description:string;
}

const ErrorAlert = ({title, description}:AlertProps) => {
  return (
    <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{description}</p>
          {/* <Button variant="outline" onClick={getLocation} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button> */}
        </AlertDescription>
      </Alert>
  )
}

export default ErrorAlert