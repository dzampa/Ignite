import fs from "fs";

export const deleteFile = async (filemane: string) => {
    try {
        await fs.promises.stat(filemane);
    } catch {
        return;
    }

    await fs.promises.unlink(filemane);
};
