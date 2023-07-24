"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
    useDropzone,
    DropzoneOptions,
    DropzoneInputProps,
    DropzoneRootProps,
    FileRejection,
    DropEvent,
} from "react-dropzone";
import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-hot-toast";

interface FileWithPreview extends File {
    preview: string;
}

interface RejectedFile {
    file: File;
    errors: Array<{ code: string; message: string }>;
}

const Dropzone: React.FC<{ className?: string }> = ({ className }) => {
    const [files, setFiles] = useState<FileWithPreview[]>([]);
    const [rejected, setRejected] = useState<RejectedFile[]>([]);

    const onDrop = useCallback<any>(
        (acceptedFiles: File[], rejectedFiles: File[]) => {
            if (acceptedFiles?.length) {
                setFiles((previousFiles) => [
                    ...previousFiles,
                    ...acceptedFiles.map((file) =>
                        Object.assign(file, { preview: URL.createObjectURL(file) })
                    ),
                ]);
            }

            if (rejectedFiles?.length) {
                setRejected((previousFiles) => [
                    ...previousFiles,
                    ...rejectedFiles.map((file) => ({
                        file,
                        errors: [
                            { code: "REJECTED_FILE", message: "File type not allowed" },
                        ],
                    })),
                ]);
            }
        },
        []
    );

    const dropzoneConfig: DropzoneOptions = {
        accept: {
            "image/png": [".png"],
        },
        maxSize: 1024 * 5000,
        onDrop,
    };

    const {
        getRootProps,
        getInputProps,
        isDragActive,
    }: {
        getRootProps: (props?: DropzoneRootProps) => DropzoneRootProps;
        getInputProps: (props?: DropzoneInputProps) => DropzoneInputProps;
        isDragActive: boolean;
    } = useDropzone(dropzoneConfig);

    useEffect(() => {
        // Revoke the data uris to avoid memory leaks
        return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, [files]);

    const removeFile = (name: string) => {
        setFiles((currentFiles) =>
            currentFiles.filter((file) => file.name !== name)
        );
    };

    const removeAll = () => {
        setFiles([]);
        setRejected([]);
    };

    const removeRejected = (name: string) => {
        setRejected((currentRejected) =>
            currentRejected.filter(({ file }) => file.name !== name)
        );
    };


    const [tags, setTags] = useState<string>("")

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!files.length) return;

        const formData = new FormData();
        files.forEach(async (file) => {
            formData.append("file", file);
            formData.append("upload_preset", "vomknb4l");

            // const cloudURL = process.env.NEXT_PUBLIC_CLOUDINARY_URL!
            const cloudinaryResponse = await fetch(
                "https://api.cloudinary.com/v1_1/dp3j5huaf/upload",
                {
                    method: "POST",
                    body: formData,
                }
            );
            const {
                created_at,
                format,
                height,
                width,
                original_filename,
                public_id,
            } = await cloudinaryResponse.json();

            if (public_id) {
                const dbresponse = await axios.post('/api/users/savetodb',{   
                    created_at,
                    format,
                    height,
                    width,
                    original_filename,
                    public_id,
                    tags,})
                    console.log(dbresponse)
                    toast.success("upload successfull")
            }else{
                return          
            }

        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div {...getRootProps({ className })}>
                <input {...getInputProps()} />
                <div className="flex flex-col items-center justify-center gap-4">
                    <ArrowUpTrayIcon className="w-5 h-5 fill-current" />
                    {isDragActive ? (
                        <p>Drop the files here ...</p>
                    ) : (
                        <p>Drag & drop files here, or click to select files</p>
                    )}
                </div>
            </div>
            {/* tags  */}

            <div className="mt-5 mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                >
                    Tags
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    onChange={(e) => {
                        setTags(e.target.value);
                    }}
                    value={tags}
                    placeholder="Enter your tags use spaces............"
                />
            </div>

            {/* Preview */}
            <section className="mt-10">
                <div className="flex gap-4">
                    <h2 className="title text-3xl font-semibold">Preview</h2>
                    <button
                        type="button"
                        onClick={removeAll}
                        className="mt-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-red-400 hover:text-white transition-colors"
                    >
                        Remove all files
                    </button>
                    <button
                        type="submit"
                        className="ml-auto mt-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-purple-400 rounded-md px-3 hover:bg-purple-400 hover:text-white transition-colors"
                    >
                        Upload to Cloudinary
                    </button>
                </div>

                {/* Accepted files */}
                <h3 className="title text-lg font-semibold text-neutral-600 mt-10 border-b pb-3">
                    Accepted Files
                </h3>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
                    {files.map((file) => (
                        <li key={file.name} className="relative h-32 rounded-md shadow-lg">
                            <Image
                                src={file.preview}
                                alt={file.name}
                                width={100}
                                height={100}
                                onLoad={() => {
                                    URL.revokeObjectURL(file.preview);
                                }}
                                className="h-full w-full object-contain rounded-md"
                            />
                            <button
                                type="button"
                                className="w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors"
                                onClick={() => removeFile(file.name)}
                            >
                                <XMarkIcon className="w-5 h-5 fill-red-500 hover:fill-secondary-400 transition-colors" />
                            </button>
                            <p className="mt-2 text-neutral-500 text-[12px] font-medium">
                                {file.name}
                            </p>
                        </li>
                    ))}
                </ul>

                {/* Rejected Files */}
                <h3 className="title text-lg font-semibold text-neutral-600 mt-24 border-b pb-3">
                    Rejected Files
                </h3>
                <ul className="mt-6 flex flex-col">
                    {rejected.map(({ file, errors }) => (
                        <li key={file.name} className="flex items-start justify-between">
                            <div>
                                <p className="mt-2 text-neutral-500 text-sm font-medium">
                                    {/* @ts-ignore */}
                                    {file.file.name}
                                </p>
                                <ul className="text-[12px] text-red-400">
                                    {errors.map((error) => (
                                        <li key={error.code}>{error.message}</li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                type="button"
                                className="mt-1 py-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors"
                                onClick={() => removeRejected(file.name)}
                            >
                                remove
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </form>
    );
};

export default Dropzone;
