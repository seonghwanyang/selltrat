"use client";

import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

export function useSocket() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // API 서버가 실행 중일 때만 연결
    const socketInstance = io("http://localhost:3001", {
      autoConnect: false, // 수동으로 연결
    });

    // 나중에 연결
    // socketInstance.connect()

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return { socket, isConnected };
}
