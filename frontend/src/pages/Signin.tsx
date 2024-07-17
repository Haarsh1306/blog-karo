import { Auth } from "../components/Auth.tsx"
import { Quote } from "../components/Quote.tsx"

export const Signin= () =>{
    return <>  
        <div className="grid md:grid-cols-2">
            <div>
                <Auth type="signin"/>
            </div>
            <div className="none md:block">
                <Quote/>
            </div>
        </div>
    </>
}