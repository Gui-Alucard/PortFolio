import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Img,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type EmailProps = {
  message: string
  email: string
  author: string
  phone?: string
}

export default function Email({ message, email, author, phone }: EmailProps) {
  const texts = {
    TERMS:
      'Essa mensagem foi produzida e distribuída por Resend e Guilherme S. Oliveira. Todos os direitos reservados.',
    PREVIEW: 'Nova mensagem do portfólio',
    HEADING: 'Você recebeu a seguinte mensagem do portfólio',
    AUTHOR: 'Autor: ',
    CONTACT: 'E-mail para contato: ',
    PHONE: 'Telefone: ',
  }

  return (
    <Html>
      <Head />
      <Preview>{texts.PREVIEW}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans text-purple-900">
          <Container className="mx-auto my-0 rounded-lg border-b-2 border-r-2 border-purple-logo/60 bg-purple-900 p-5">
            <Section className="rounded-t bg-purple-50">
              <Section className="mx-auto mt-1 px-0 py-2">
                <Img
                  src="https://i.ibb.co/yYzt5Yp/Ativo-1-360x.png"
                  height={40}
                  width="auto"
                  className="mx-auto"
                  alt="Guilherme logo"
                />
              </Section>
              <Section className="px-8 py-2">
                <Heading className="mb-3 font-orbitron text-xl font-bold text-purple-900">
                  {texts.HEADING}
                </Heading>
                <Text className="mx-0 mb-4 mt-6 font-sans text-sm text-gray-950">
                  {message}
                </Text>
              </Section>
            </Section>
            <Hr />
            <Section className="rounded-b bg-purple-50 px-9 py-6">
              <Text className="m-0 mb-1 font-sans text-sm text-gray-950">
                {texts.AUTHOR}
                {author}
              </Text>
              {phone && (
                <Text className="m-0 mb-1 font-sans text-sm text-gray-950">
                  {texts.PHONE}
                  {phone}
                </Text>
              )}
              <Text className="m-0 font-sans text-sm text-gray-950">
                {texts.CONTACT}
                {email}
              </Text>
            </Section>
            <Text className="mx-0 mt-6 px-5 py-0 font-sans text-xs text-purple-50">
              {texts.TERMS}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
