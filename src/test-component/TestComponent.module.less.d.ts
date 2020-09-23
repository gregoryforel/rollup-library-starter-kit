declare namespace TestComponentModuleLessNamespace {
    export interface ITestComponentModuleLess {
        test: string
    }
}

declare const TestComponentModuleLessModule: TestComponentModuleLessNamespace.ITestComponentModuleLess & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: TestComponentModuleLessNamespace.ITestComponentModuleLess
}

export = TestComponentModuleLessModule
