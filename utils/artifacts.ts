import path from 'path';
import { TestInfo } from '@playwright/test';

export function getArtifactPath(testInfo: TestInfo, extension: string): string {
  return path.join('artifacts', `${testInfo.title.replace(/[^a-zA-Z0-9]/g, '_')}.${extension}`);
}
