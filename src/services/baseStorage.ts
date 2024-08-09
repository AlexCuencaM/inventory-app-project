export const baseStorage = <T extends unknown>() => {
    
    const SaveData = (data: T | T[], key: string): boolean => {
        try {
            const jsonValue = JSON.stringify(data);
            localStorage.setItem(key, (typeof data === "string") ? data : jsonValue);
            return true;
        } catch (error) {
            return false;
        }
    };

    const GetData = <T extends unknown>(key: string): T => {
        const value = localStorage.getItem(key);
        const objToken: T = {} as T;

        if (value != null) {
            const objToken: T = (typeof value === "string") ? JSON.parse(value) : new Error("Parse unexpected");
            return objToken;
        }

        switch (typeof objToken) {
            case 'string':
                return '' as unknown as T;
            case 'boolean':
                return false as unknown as T;
            case 'number':
                return 0 as unknown as T;
            default:
                return undefined as unknown as T;
        }
    };

    const RemoveData = (key: string): void => {
        localStorage.removeItem(key);
    };

    return {
        SaveData,
        GetData,
        RemoveData,
    };
}