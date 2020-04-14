// Generated by https://quicktype.io

export interface TopHeadLines {
    status:       string;
    totalResults: number;
    articles:     Article[];
}

export interface Article {
    source:      Source;
    author:      null | string;
    title:       string;
    description: string;
    url:         string;
    urlToImage:  string;
    publishedAt: string;
    content:     string;
}

export interface Source {
    id:   null | string;
    name: string;
}

export interface HeaderConfigs{
    title: string;
    color?: string;
    class?: string;
}