import VerifyEmail from '@/components/VerifyEmail'
import Image from 'next/image'

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const VerifyEmailPage = ({ searchParams }: PageProps) => {
  const token = searchParams.token
  const toEmail = searchParams.to

  return (
    <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        {token && typeof token === 'string' ? (
          <div className='grid gap-6'>
            <VerifyEmail token={token} />
          </div>
        ) : (
          <div className='flex h-full flex-col items-center justify-center space-y-1'>
            <div className='relative mb-4 h-80 w-80 text-muted-foreground'>
              <Image
                src='/hippo-email-sent.png'
                fill
                alt='hippo email sent image'
              />
            </div>

            <h3 className='font-bold text-2xl'>
            First, let's verify your email
            </h3>

            {toEmail ? (
              <p className='text-muted-foreground text-center'>
                Check{' '}
                <span className='font-bold'>
                  {toEmail}</span> to verify your account and get started.
                
                .
              </p>
            ) : (
              <p className='text-muted-foreground text-center'>
                We&apos;ve sent a verification link to your
                email.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default VerifyEmailPage
