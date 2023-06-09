import React from "react";

type EducationProps = {
	formData: {
		schoolName: string;
		degreeName: string;
		schoolStartDate: string;
		schoolEndDate: string;
	};

	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Education = ({ formData, handleInputChange }: EducationProps) => {
	const { schoolName, degreeName, schoolStartDate, schoolEndDate } = formData;
	const currentYear = new Date().getFullYear();

	return (
		<div className="educationInfo">
			<h2>Education Experience</h2>
			<input
				value={schoolName}
				type="text"
				placeholder="School Name"
				className="input"
				name="schoolName"
				onChange={handleInputChange}
				required
			/>
			<input
				value={degreeName}
				type="text"
				placeholder="Degree Name"
				className="input"
				name="degreeName"
				onChange={handleInputChange}
				required
			/>
			<input
				value={schoolStartDate}
				type="date"
				placeholder="Start Year"
				className="input"
				name="schoolStartDate"
				min="1"
				max={currentYear}
				onChange={handleInputChange}
				required
			/>
			<input
				value={schoolEndDate}
				type="date"
				placeholder="End Year"
				className="input"
				name="schoolEndDate"
				min="1"
				max={currentYear}
				onChange={handleInputChange}
				required
			/>
		</div>
	);
};

export default Education;
