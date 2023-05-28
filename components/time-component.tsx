"use client";
import { useEffect, useState } from "react";

export default function TimeComponent() {
  const [time, setTime] = useState(new Date());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      setIsMounted(false);
      clearInterval(timer);
    };
  }, []);

  return <p>Current Local Time {isMounted && time.toLocaleTimeString()}</p>;
}
