const Help = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-semibold mb-4">Help & Support</h1>
                <p className="mb-6 text-gray-600">
                    Need help? Find answers to common questions below or reach out to support.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>How to submit assignments?</li>
                    <li>How to contact your instructor?</li>
                    <li>How to track your grades?</li>
                </ul>
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
                    💬 Still stuck? Contact us at <span className="text-blue-600">support@canvasclone.com</span>
                </div>
            </main>
        </div>
    );
};

export default Help;
