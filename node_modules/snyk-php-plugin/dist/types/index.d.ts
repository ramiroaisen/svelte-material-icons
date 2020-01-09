import { ComposerParserResponse } from '@snyk/composer-lockfile-parser';
import { legacyPlugin } from '@snyk/cli-interface';
export interface PhpPluginResult {
    plugin: PhpPlugin;
    package: ComposerParserResponse;
}
export interface PhpPlugin {
    name: string;
    targetFile: string;
}
export interface PhpOptions extends legacyPlugin.BaseInspectOptions {
    composerIsFine?: boolean;
    composerPharIsFine?: boolean;
    systemVersions?: object;
}
