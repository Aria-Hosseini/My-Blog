"use client";

import { useRef, useState, useEffect } from "react";

export default function CreateArticle() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const savedTitle = localStorage.getItem("article-title");
        const savedContent = localStorage.getItem("article-description");
        if (savedTitle) setTitle(savedTitle);
        if (savedContent && editorRef.current) {
            editorRef.current.innerHTML = savedContent;
            setDescription(savedContent);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("article-title", title);
    }, [title]);

    useEffect(() => {
        localStorage.setItem("article-description", description);
    }, [description]);

    const exec = (command: string, value?: string) => {
        document.execCommand(command, false, value || "");
        if (editorRef.current) {
            setDescription(editorRef.current.innerHTML);
        }
    };

    const createblog = () => {
        fetch("http://localhost:8000/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: Math.floor(Math.random() * 1000).toString(),
                title,
                description,
            }),
        });
    };

    return (
        <div className="flex flex-col items-center justify-center mt-20 w-full max-w-2xl mx-auto px-4 mb-20">
            <div className="flex flex-row bg-amber-100 w-full p-2 gap-2 rounded shadow">
                <label className="w-24 font-medium">عنوان</label>
                <input
                dir="rtl"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="مثلاً: معرفی انیمه One Piece"
                />
            </div>

            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 mt-4 bg-gray-100 p-2 rounded shadow w-full justify-center">
                {[{ cmd: "bold", label: "Bold" }, { cmd: "italic", label: "Italic" }, { cmd: "underline", label: "Underline" }, { cmd: "insertOrderedList", label: "OL" }, { cmd: "insertUnorderedList", label: "UL" }, { cmd: "justifyLeft", label: "Left" }, { cmd: "justifyCenter", label: "Center" }, { cmd: "justifyRight", label: "Right" }, { cmd: "removeFormat", label: "Clear" }].map((btn) => (
                    <button
                        key={btn.cmd}
                        onClick={() => exec(btn.cmd)}
                        className="px-3 py-1 bg-amber-500 text-white rounded hover:bg-amber-600 text-sm"
                    >
                        {btn.label}
                    </button>
                ))}

                {/* Heading Dropdown */}
                <select
                    onChange={(e) => exec("formatBlock", e.target.value)}
                    className="p-1 rounded border border-gray-300 text-sm"
                >
                    <option value="p">متن معمولی</option>
                    <option value="h1">عنوان 1</option>
                    <option value="h2">عنوان 2</option>
                    <option value="h3">عنوان 3</option>
                    <option value="h4">عنوان 4</option>
                    <option value="h5">عنوان 5</option>
                    <option value="h6">عنوان 6</option>
                </select>

                {/* Font Size */}
                <select
                    onChange={(e) => exec("fontSize", e.target.value)}
                    className="p-1 rounded border border-gray-300 text-sm"
                >
                    <option value="3">سایز معمولی</option>
                    <option value="5">درشت</option>
                    <option value="7">خیلی درشت</option>
                </select>

                {/* Font Color */}
                <input
                    type="color"
                    onChange={(e) => exec("foreColor", e.target.value)}
                    className="w-8 h-8 border-none cursor-pointer"
                />

                {/* Highlight Color */}
                {["yellow", "lightgreen", "lightblue", "lightcoral"].map((color) => (
                    <button
                        key={color}
                        onClick={() => exec("backColor", color)}
                        className="w-6 h-6 rounded-full border cursor-pointer"
                        style={{ backgroundColor: color }}
                        title={`هایلایت ${color}`}
                    />
                ))}

                {/* Insert Link */}
                <button
                    onClick={() => {
                        const url = prompt("آدرس لینک را وارد کنید:");
                        const selection = window.getSelection();
                        if (url && selection && !selection.isCollapsed) {
                            exec("createLink", url);
                            setTimeout(() => {
                                const links = editorRef.current?.getElementsByTagName("a");
                                if (links && links.length > 0) {
                                    const lastLink = links[links.length - 1];
                                    lastLink.setAttribute("target", "_blank");
                                    lastLink.setAttribute("rel", "noopener noreferrer");
                                }
                                if (editorRef.current) {
                                    setDescription(editorRef.current.innerHTML);
                                }
                            }, 0);
                        } else {
                            alert("ابتدا بخشی از متن را انتخاب کنید.");
                        }
                    }}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                    لینک
                </button>

                {/* Remove Link */}
                <button
                    onClick={() => exec("unlink")}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                >
                    حذف لینک
                </button>
            </div>

            {/* Editable content area */}
            <div className="flex flex-row bg-amber-100 w-full mt-4 p-2 gap-2 rounded shadow">
                <label className="w-24 font-medium">متن</label>
                <div
                    ref={editorRef}
                    contentEditable
                    dir="rtl"
                    onInput={() => {
                        if (editorRef.current) {
                            setDescription(editorRef.current.innerHTML);
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            document.execCommand("insertParagraph");
                            e.preventDefault();
                        }
                    }}
                    className="flex-1 min-h-[200px] p-2 border border-gray-300 rounded bg-white overflow-auto text-right"
                ></div>
            </div>

            <button
                onClick={createblog}
                className="bg-amber-600 px-6 py-3 rounded-2xl mt-4 text-white hover:bg-amber-700 shadow"
            >
                publish
            </button>
        </div>
    );
}