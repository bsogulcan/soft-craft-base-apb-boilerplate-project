export class ResponceType<T> {
    error: any;
    result: T;
    success: boolean;
    targetUrl: string;
    unAuthorizedRequest: boolean;
    __abp: boolean;
}

export class ResponceTypeWrap<T> {
    error: any;
    result: ResponceResultType<T>;
    success: boolean;
    targetUrl: string;
    unAuthorizedRequest: boolean;
    __abp: boolean;
}

export class ResponceResultType<T>{
    items: T;
    totalCount: number;
}