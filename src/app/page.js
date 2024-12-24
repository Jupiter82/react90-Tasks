import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-center">90+ react tasks</h1>
      <div className="flex justify-center">
        <table className="border border-gray-400 text-left">
          <thead>
            <tr className="border-b border-gray-400">
              <th className="p-2 border-x">React Projects</th>
              <th className="p-2 border-x">Description of the Projects</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-400">
              <td className="p-2 border-x">
                <Link
                  href="/pages/submissionForm
                "
                  className="hover:underline"
                >
                  Submission Form
                </Link>
              </td>
              <td className="p-2 border-x">
                Form is a document that stores user information on a web server
                using interactive controls
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
