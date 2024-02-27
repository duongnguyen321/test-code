'use client';
import {
	Card,
	CardBody,
	CardHeader,
	Input,
	Button,
	Textarea,
	CardFooter,
} from '@nextui-org/react';
import SelectComponent from './Select';
import { FormEvent, useState } from 'react';
import BackHome from '@/components/BackHome';

export default function ContactUI() {
	const [loading, setLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setLoading(true);

		try {
		} catch (e) {
			console.error('Error: ', e);
		} finally {
			setLoading(false);
		}
	}
	return (
		<Card className='contact__wrapper'>
			<CardHeader
				className='contact__header'
				data-aos='fade-up'
				data-aos-delay={50}
			>
				<h1 className='text-md m-0 w-fit font-mono font-normal'>Post Blogs</h1>
			</CardHeader>
			<form className='contact__form' onSubmit={handleSubmit}>
				<CardBody
					className='pb-0 flex flex-col gap-2'
					data-aos='fade-up'
					data-aos-delay={100}
				>
					<Input
						isDisabled={loading}
						name='title'
						type='text'
						label='Title'
						variant='underlined'
						readOnly
						className='contact__form-title'
						classNames={{
							input: 'text-base md:text-lg',
						}}
					/>
					<SelectComponent isDisable={loading} />
					<Textarea
						isDisabled={loading}
						variant='underlined'
						name='message'
						label={'Mô tả'}
						labelPlacement='outside'
						placeholder={'What you can write:V ?'}
						classNames={{
							input: 'text-base md:text-lg',
						}}
						className='mb-6 md:mb-0'
						minRows={5}
						maxRows={10}
					/>
				</CardBody>
				<CardFooter className='pb-2 pt-0'>
					{isSuccess ? (
						<BackHome className='contact__form-btn'>
							Thank you for posts!
						</BackHome>
					) : (
						<Button
							isDisabled={loading}
							isLoading={loading}
							type='submit'
							variant='bordered'
							color='default'
							className='contact__form-btn contact__form-btn--success'
						>
							Submit
						</Button>
					)}
				</CardFooter>
			</form>
		</Card>
	);
}
