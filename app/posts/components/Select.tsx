'use client';

import { Select, SelectItem } from '@nextui-org/react';
export default function SelectComponent({ isDisable }: { isDisable: boolean }) {
	const subjectList = [
		{
			label: 'contact',
			content: 'Liên hệ với tôi',
		},
		{
			label: 'feature',
			content: 'Yêu cầu tính năng',
		},
		{
			label: '404',
			content: 'Lỗi 404',
		},
		{
			label: '500',
			content: 'Lỗi 500',
		},
	];
	return (
		<Select
			isRequired
			isDisabled={isDisable}
			name='subject'
			defaultSelectedKeys={['contact']}
			variant='underlined'
			label={'Vấn đề'}
			placeholder={'Lựa chọn vấn đề của bạn'}
			classNames={{
				label: 'text-base md:text-lg',
			}}
			className='max-w-full w-96 md:w-unit-9xl'>
			{subjectList.map((subject, i) => (
				<SelectItem
					key={subject.label}
					value={subject.label}
					data-aos='fade-up'
					data-aos-delay={25 * i}>
					{subject.content}
				</SelectItem>
			))}
		</Select>
	);
}
