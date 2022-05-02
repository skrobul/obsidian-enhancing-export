
import { strTpl } from '../utils';
import type lang from './en-US';


export default ((): typeof lang => {
  return {
    selectExportFolder: '请选择导出文件夹',
    exportSuccessNotice: strTpl `导出文件 ${0} 成功！`,
    exportCommandOutputMessage: strTpl `命令：${0}`,
    exportErrorOutputMessage:  strTpl `命令 ${0}，错误：{1}`,
    messageBox: {
      yes: '是',
      no: '否',
      ok: '确认',
      cancel: '取消'
    },
    overwriteConfirmationDialog: {
      replace: '替换',
      title: strTpl `"${0}" 已经存在。您要替换它吗？`,
      message: strTpl `"${0}" 文件夹中已有相同的文件或文件夹，若替换，则会覆盖其当前内容。`,
    },
    preparing: strTpl `正在生成 "${0}" ......`,
    chooseSetting: '选择配置',
    save: '保存',
    new: '新建',
    name: '名称',
    general: '通用',
    type: '类型',
    fileName: '文件名',
    overwriteConfirmation: '覆盖提示',
    defaultFolderForExportedFile: '默认的导出文件夹',
    customLocation: '自定义', 
    pandocPath: 'Pandoc 路径', 
    pandocPathPlaceholder: '（自动检测）', 
    sameFolderWithCurrentFile: '与原文件同一目录下',
    add: '添加',
    afterExport: '导出后',
    arguments: '参数',
    auto: '自动',
    command: '命令', 
    exportDialog: {
      title: strTpl `导出为 ${0}`,
      export: '导出',
    },
    exportTo: '导出到',
    exportToOo: '导出为......',
    extraArguments: '自定义参数',
    openExportedFile: '打开导出文件',
    openExportedFileLocation: '打开导出文件所在目录',
    remove: '移除',
    rename: '重命名',
    reset: '重置',
    runCommand: '运行自定义命令',
    settingTabTitle: '导出设置',
    showCommandOutput: '显示命令行删除',
    targetFileExtensions: '目标文件扩展名',
    targetFileExtensionsTip: '（用空格分开）',
    template: '模板'
  };
})();