import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Home() {

  const [isLogin, setIsLogin] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if(isLogin === false){
      router.replace('/login')
    }
  }, [isLogin]);

  return (
    <h1>you arent login (root index.js)</h1>
  )
}
