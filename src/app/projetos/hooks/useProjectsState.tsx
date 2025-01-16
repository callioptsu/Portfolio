'use client'
import { Dispatch, SetStateAction, useState } from 'react'

// Interfaces
import { IProject } from '@/interfaces'

interface MethodReturn {
  dataSet: IProject[]
  setDataSet: Dispatch<SetStateAction<IProject[]>>
}

export default function useProjectsState(): MethodReturn {
  const [dataSet, setDataSet] = useState<IProject[]>([])

  return { dataSet, setDataSet }
}
