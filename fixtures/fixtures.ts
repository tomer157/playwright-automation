export interface Fixtures {
    headers: {
      'Content-Type': string;
      'Authorization': string;
    };

    payload: {
        name: string,
        date: string 
    }
  }