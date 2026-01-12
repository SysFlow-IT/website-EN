import * as EN from '../constants/en';

type ContentType = typeof EN;

interface ContentResult {
    content: ContentType;
}

export const useContent = (): ContentResult => {
    return { content: EN };
};
