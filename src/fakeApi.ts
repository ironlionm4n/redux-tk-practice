export const resetCountFromFakeApi = (): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
      });
    }, 3000);
  });
};
