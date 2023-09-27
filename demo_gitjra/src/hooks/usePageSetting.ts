export const usePageSetting = () => {

    const setPageTitle = (title: string) => {
        document.title = `${title}` ;
    };
    return {
        setPageTitle
    };
};
