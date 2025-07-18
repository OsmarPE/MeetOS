'use client'
import React, { useState } from "react"

type meetTypeId = {
        id : string,
        grantId: string,
        grandEmail: string,
    }
    
    export type MeetingRemoveEvent = {
    meet:meetTypeId,
    handleWantRemoveMeetQuestion: ({ id, grantId, grandEmail }:meetTypeId) => void
    closeModal: () => void,
    showModal: boolean
}

export const MeetingRemoveEventContext = React.createContext<MeetingRemoveEvent | null>(null)


export const MeetingRemoveEventProvider = ({ children }: { children: React.ReactNode }) => {

    const [meet, setMeet] = useState({
        id: '',
        grantId: '',
        grandEmail: '',
    })
    const [showModal, setshowModal] = useState(false)


    const handleWantRemoveMeetQuestion = ({ id, grantId, grandEmail }:meetTypeId) => {
        setMeet({
            id,
            grantId,
            grandEmail
        })
        setshowModal(true)
    }

    const closeModal = () => {
        setMeet({
            id: '',
            grantId: '',
            grandEmail: '',
        })
        setshowModal(false)
    }

    return (
        <MeetingRemoveEventContext.Provider value={{ meet, handleWantRemoveMeetQuestion, showModal, closeModal }}>
            {children}
        </MeetingRemoveEventContext.Provider>
    )
}