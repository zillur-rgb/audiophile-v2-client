// Function for matching the path and highlighting the active path
export const routeMatchPath = (route: string, pathname: string) => {
  if (pathname === route) {
    return true;
  }
};
