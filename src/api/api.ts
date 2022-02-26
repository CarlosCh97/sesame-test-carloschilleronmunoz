import axios from "axios";
const token: String =
  "9a4c685e6fca0347ca0775119e9c47b6ba00e49096ba99ffcf6a41fe06e6f001";

export async function getAllEmployees(): Promise<
  [{ employee: { id: string } }]
> {
  let data: [{ employee: { id: string } }] = [{ employee: { id: "" } }];

  await axios
    .get("https://api.sesametime.com/schedule/v1/work-entries", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data = response.data.data;
    });

  return data;
}

export async function clockIn(employeeId: String): Promise<any> {
  let data: any = [];

  await axios
    .post(
      "https://api.sesametime.com/schedule/v1/work-entries/clock-in",
      {
        employeeId: employeeId,
        workEntryIn: { latitude: 0, longitude: 0 },
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      data = response.data.data;
    });

  return data;
}

export async function clockOut(employeeId: String): Promise<any> {
  let data: any = [];

  await axios
    .post(
      "https://api.sesametime.com/schedule/v1/work-entries/clock-out",
      {
        employeeId: employeeId,
        workEntryOut: { latitude: 0, longitude: 0 },
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      data = response.data.data;
    });

  return data;
}
