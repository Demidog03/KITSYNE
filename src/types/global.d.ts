declare module 'next-plugin-antd-less';
declare module 'next-with-less';
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}
