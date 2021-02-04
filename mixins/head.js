/* eslint-disable */
export default ({ title, desc = '每-个人博客', script = [] }) => {
    return {
        head: {
            title: `${title}-${desc}`,
            script,
        },
    }
}