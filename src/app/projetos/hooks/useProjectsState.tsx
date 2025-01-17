'use client'
import { Dispatch, SetStateAction, useState } from 'react'

// Interfaces
import { IProject } from '@/interfaces'

interface MethodReturn {
  dataSet: IProject[]
  setDataSet: Dispatch<SetStateAction<IProject[]>>
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export default function useProjectsState(): MethodReturn {
  const [dataSet, setDataSet] = useState<IProject[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  return { dataSet, setDataSet, isLoading, setIsLoading }
}
