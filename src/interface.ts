import { marked } from "marked";
import EasyMDE from "./easymde";
interface ArrayOneOrMore<T> extends Array<T> {
    0: T;
}
type ToolbarButton =
    'bold'
    | 'italic'
    | 'quote'
    | 'unordered-list'
    | 'ordered-list'
    | 'link'
    | 'image'
    | 'upload-image'
    | 'strikethrough'
    | 'code'
    | 'table'
    | 'redo'
    | 'heading'
    | 'undo'
    | 'heading-bigger'
    | 'heading-smaller'
    | 'heading-1'
    | 'heading-2'
    | 'heading-3'
    | 'clean-block'
    | 'horizontal-rule'
    | 'preview'
    | 'side-by-side'
    | 'fullscreen'
    | 'guide';
export interface TimeFormatOptions {
    locale?: string | string[];
    format?: Intl.DateTimeFormatOptions;
}

export interface AutoSaveOptions {
    enabled?: boolean;
    delay?: number;
    submit_delay?: number;
    uniqueId: string;
    timeFormat?: TimeFormatOptions;
    text?: string;
}

export interface BlockStyleOptions {
    bold?: string;
    code?: string;
    italic?: string;
}

export interface CustomAttributes {
    [key: string]: string;
}

export interface InsertTextOptions {
    horizontalRule?: ReadonlyArray<string>;
    image?: ReadonlyArray<string>;
    link?: ReadonlyArray<string>;
    table?: ReadonlyArray<string>;
}

export interface ParsingOptions {
    allowAtxHeaderWithoutSpace?: boolean;
    strikethrough?: boolean;
    underscoresBreakWords?: boolean;
}

export interface PromptTexts {
    image?: string;
    link?: string;
}

export interface RenderingOptions {
    codeSyntaxHighlighting?: boolean;
    hljs?: any;
    markedOptions?: marked.MarkedOptions;
    sanitizerFunction?: (html: string) => string;
    singleLineBreaks?: boolean;
}

export interface Shortcuts {
    [action: string]: string | undefined | null;

    toggleBlockquote?: string | null;
    toggleBold?: string | null;
    cleanBlock?: string | null;
    toggleHeadingSmaller?: string | null;
    toggleItalic?: string | null;
    drawLink?: string | null;
    toggleUnorderedList?: string | null;
    togglePreview?: string | null;
    toggleCodeBlock?: string | null;
    drawImage?: string | null;
    toggleOrderedList?: string | null;
    toggleHeadingBigger?: string | null;
    toggleSideBySide?: string | null;
    toggleFullScreen?: string | null;
}

export interface StatusBarItem {
    className: string;
    defaultValue: (element: HTMLElement) => void;
    onUpdate: (element: HTMLElement) => void;
}

export interface ToolbarDropdownIcon {
    name: string;
    children: ArrayOneOrMore<ToolbarIcon | ToolbarButton>;
    className: string;
    title: string;
    noDisable?: boolean;
    noMobile?: boolean;
}

export interface ToolbarIcon {
    name: string;
    action: string | ((editor: EasyMDE) => void);
    className: string;
    title: string;
    noDisable?: boolean;
    noMobile?: boolean;
    icon?: string;
    attributes?: CustomAttributes;
}

export interface ImageTextsOptions {
    sbInit?: string;
    sbOnDragEnter?: string;
    sbOnDrop?: string;
    sbProgress?: string;
    sbOnUploaded?: string;
    sizeUnits?: string;
}

export interface ImageErrorTextsOptions {
    noFileGiven?: string;
    typeNotAllowed?: string;
    fileTooLarge?: string;
    importError?: string;
}

export interface OverlayModeOptions {
    mode: CodeMirror.Mode<any>;
    combine?: boolean;
}

export interface SpellCheckerOptions {
    codeMirrorInstance: CodeMirror.Editor;
}

export interface Options {
    autoDownloadFontAwesome?: boolean;
    autofocus?: boolean;
    autosave?: AutoSaveOptions;
    autoRefresh?: boolean | { delay: number; };
    blockStyles?: BlockStyleOptions;
    element?: HTMLElement;
    forceSync?: boolean;
    hideIcons?: ReadonlyArray<ToolbarButton>;
    indentWithTabs?: boolean;
    initialValue?: string;
    insertTexts?: InsertTextOptions;
    lineNumbers?: boolean;
    lineWrapping?: boolean;
    minHeight?: string;
    maxHeight?: string;
    parsingConfig?: ParsingOptions;
    placeholder?: string;
    previewClass?: string | ReadonlyArray<string>;
    previewImagesInEditor?: boolean;
    imagesPreviewHandler?: (src: string) => string,
    previewRender?: (markdownPlaintext: string, previewElement: HTMLElement) => string | null;
    promptURLs?: boolean;
    renderingConfig?: RenderingOptions;
    shortcuts?: Shortcuts;
    showIcons?: ReadonlyArray<ToolbarButton>;
    spellChecker?: boolean | ((options: SpellCheckerOptions) => void);
    inputStyle?: 'textarea' | 'contenteditable';
    nativeSpellcheck?: boolean;
    sideBySideFullscreen?: boolean;
    status?: boolean | ReadonlyArray<string | StatusBarItem>;
    styleSelectedText?: boolean;
    tabSize?: number;
    toolbar?: boolean | ReadonlyArray<'|' | ToolbarButton | ToolbarIcon | ToolbarDropdownIcon>;
    toolbarTips?: boolean;
    toolbarButtonClassPrefix?: string;
    onToggleFullScreen?: (goingIntoFullScreen: boolean) => void;
    theme?: string;
    scrollbarStyle?: string;
    unorderedListStyle?: '*' | '-' | '+';

    uploadImage?: boolean;
    imageMaxSize?: number;
    imageAccept?: string;
    imageUploadFunction?: (file: File, onSuccess: (url: string) => void, onError: (error: string) => void) => void;
    imageUploadEndpoint?: string;
    imagePathAbsolute?: boolean;
    imageCSRFToken?: string;
    imageCSRFName?: string;
    imageCSRFHeader?: boolean;
    imageTexts?: ImageTextsOptions;
    errorMessages?: ImageErrorTextsOptions;
    errorCallback?: (errorMessage: string) => void;

    promptTexts?: PromptTexts;
    syncSideBySidePreviewScroll?: boolean;

    overlayMode?: OverlayModeOptions;

    direction?: 'ltr' | 'rtl';
}