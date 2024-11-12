import React from 'react'

interface Props {
    ownerId: string;
    accountId: string;
    className?: string;
}

const FileUploader = ({ ownerId, accountId, className }: Props) => {
    return (
        <div>
            File Uploader
        </div>
    )
}

export default FileUploader
