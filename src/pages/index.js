import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Index() {

  const router = useRouter();

  useEffect(() => {
    if(localStorage.getItem('loginData') === null){
      router.replace('/login')
      console.log(localStorage.getItem('loginData'))
    }else {
      router.replace('/home')
    }
  }, []);
}
