// Client-side version information utility

// Define version info based on environment variables or defaults
const packageVersion = process.env.NEXT_PUBLIC_APP_VERSION || "0.1.0";
const buildTimestamp =
  process.env.NEXT_PUBLIC_BUILD_TIME || new Date().toISOString();
const buildCommit = process.env.NEXT_PUBLIC_COMMIT_HASH || "local-development";
const environment =
  process.env.NEXT_PUBLIC_NODE_ENV || process.env.NODE_ENV || "development";

export function getVersionInfo() {
  return {
    version: packageVersion,
    commit: buildCommit,
    environment: environment,
    timestamp: buildTimestamp,
    isLocalDevelopment: buildCommit === "local-development",
  };
}

export function logVersionInfo() {
  const info = getVersionInfo();
  // Use console.debug instead of console.log to hide under debug level
  console.debug(
    "%c Tigra Labs Version Info ",
    "background: #222; color: #bada55; font-size: 16px; padding: 4px 8px; border-radius: 4px;"
  );
  // console.debug supports table format
  console.debug("%c Version Details:", "font-weight: bold;", "\n", {
    Version: info.version,
    Commit: info.commit,
    Environment: info.environment,
    "Build Time": info.timestamp,
  });

  if (info.isLocalDevelopment) {
    console.debug(
      "%c Local Development Build ",
      "background: #ff5722; color: white; font-size: 14px; padding: 2px 6px; border-radius: 4px;"
    );
  }
}
