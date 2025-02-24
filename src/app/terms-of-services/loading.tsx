export default function Loading() {

    return (
          <div className="flex items-center justify-center h-screen">
            <div
              className="w-12 h-12 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        );
      }
      