import fs from "fs";
import path from "path";

const CUSTOMIZATION_DIRECTORY = "../customization";
const CUSTOM_FORMATTING_SETTINGS_PATH = `${CUSTOMIZATION_DIRECTORY}/custom-formatting.json`;
const DEFAULT_CUSTOM_FORMATTING_SETTINGS = {
  version: "1.0",
  customFormats: [],
};

export async function get() {
  let customFormattingSettings = {};
  try {
    customFormattingSettings = getCustomFormattingSettings() || customFormattingSettings;
  } catch {
    // custom settings will be empty for now.
  }
  let result = { customFormattingSettings };
  return {
    header: "accept: application/json",
    status: 200,
    body: result,
  };
}

export function post(request) {
  const { newCustomFormat } = JSON.parse(request.body);

  let customFormattingSettings = getCustomFormattingSettings() || {};

  if (newCustomFormat) {
    if (!customFormattingSettings.customFormats) {
      customFormattingSettings.customFormats = [];
    }
    if (newCustomFormat.formatTag && newCustomFormat.formatCode) {
      customFormattingSettings.customFormats.push(newCustomFormat);
    }
    saveCustomFormattingSettings(customFormattingSettings);
  }
  return { body: customFormattingSettings };
}

export function del(request) {
  const { formatTag } = JSON.parse(request.body);
  let customFormattingSettings = getCustomFormattingSettings() || {};
  if (formatTag) {
    if (!customFormattingSettings.customFormats) {
      customFormattingSettings.customFormats = [];
    }
    let index = customFormattingSettings.customFormats.findIndex(
      (format) => format.formatTag === formatTag
    );
    if (index >= 0) {
      customFormattingSettings.customFormats.splice(index, 1);
    }
    saveCustomFormattingSettings(customFormattingSettings);
  }
  return { body: customFormattingSettings };
}

function getCustomFormattingSettings() {
  let customFormattingSettingsPath = getCustomFormattingSettingsFilePath();
  return JSON.parse(fs.readFileSync(customFormattingSettingsPath, "utf8"));
}

function saveCustomFormattingSettings(customFormattingSettings) {
  let customFormattingSettingsPath = getCustomFormattingSettingsFilePath();
  fs.writeFileSync(
    customFormattingSettingsPath,
    JSON.stringify(customFormattingSettings, null, 2)
  );
}

function getCustomFormattingSettingsFilePath() {
  let customFormattingSettingsPath = path.join(
    path.resolve("./"),
    CUSTOM_FORMATTING_SETTINGS_PATH
  );
  if (!fs.existsSync(customFormattingSettingsPath)) {
    if (!fs.existsSync(CUSTOMIZATION_DIRECTORY)) {
      fs.mkdirSync(CUSTOMIZATION_DIRECTORY);
    }
    fs.writeFileSync(
      customFormattingSettingsPath,
      JSON.stringify(DEFAULT_CUSTOM_FORMATTING_SETTINGS, null, 2)
    );
  }
  return customFormattingSettingsPath;
}
